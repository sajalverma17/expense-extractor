import json
from oauthlib.oauth2 import BackendApplicationClient
import requests
from requests_oauthlib import OAuth2Session
import urllib.parse

auth_url = "https://auth.sbanken.no"
api_url = "https://publicapi.sbanken.no/apibeta"

def enable_debug_logging():
    import logging

    import http.client
    http.client.HTTPConnection.debuglevel = 1
    logging.basicConfig()
    logging.getLogger().setLevel(logging.DEBUG)
    requests_log = logging.getLogger("requests.packages.urllib3")
    requests_log.setLevel(logging.DEBUG)
    requests_log.propagate = True


def create_authenticated_http_session(client_id, client_secret) -> requests.Session:
    oauth2_client = BackendApplicationClient(client_id=urllib.parse.quote(client_id))
    session = OAuth2Session(client=oauth2_client)
    token = session.fetch_token(
        token_url=f'{auth_url}/identityserver/connect/token',
        client_id=urllib.parse.quote(client_id),
        client_secret=urllib.parse.quote(client_secret)
    )
    return session


def get_customer_information(http_session: requests.Session, customerid):
    response_object = http_session.get(
        f"{api_url}/api/v1/Customers",
        headers={'customerId': customerid}
    )
    response = response_object.json()

    if not response["isError"]:
        return response["item"]
    else:
        raise RuntimeError("{} {}".format(response["errorType"], response["errorMessage"]))


def get_accountId(http_session: requests.Session, customerid) -> str:
    response_object = http_session.get(
        f"{api_url}/api/v1/Accounts",
        headers={'customerId': customerid}
    )
    response = response_object.json()

    if not response["isError"]:
        return response["items"][0]['accountId']
    else:
        raise RuntimeError("{} {}".format(response["errorType"], response["errorMessage"]))


def get_transactions(http_session: requests.Session, customerid: str, accountId: str, startDate: str, endDate: str):
    response_object = http_session.get(
        f"{api_url}/api/v1/Transactions/{accountId}/?startDate={startDate}&endDate={endDate}",
        headers={'customerId': customerid}
    )
    response = response_object.json()
    if not response["isError"]:
        transactions = response["items"]
        return transactions
    else:
        raise RuntimeError("{} {}".format(response["errorType"], response["errorMessage"]))

def filter_transactions_on_token(transactions: list, token: str):
    filteredTransactions = [transaction for transaction in transactions if token.casefold() in transaction["text"].casefold()]
    for transaction in filteredTransactions:
        print(transaction["text"] + " | " + transaction["accountingDate"])
    return filteredTransactions

def sum_of_transactions(transactions: list):
    amounts = [int(transaction["amount"]) for transaction in transactions]
    return sum(amounts)



def main():
    # enable_debug_logging()
    import api_settings
    import pprint

    http_session = create_authenticated_http_session(api_settings.CLIENTID, api_settings.SECRET)

    customer_info = get_customer_information(http_session, api_settings.CUSTOMERID)
    pprint.pprint(customer_info)

    accountId = get_accountId(http_session, api_settings.CUSTOMERID)
    pprint.pprint(accountId)

    transactions = get_transactions(http_session, api_settings.CUSTOMERID, accountId, '2023-04-01', '2023-04-21')

    filteredTransactions = filter_transactions_on_token(transactions, "kiwi")

    totalAmount = sum_of_transactions(filteredTransactions)
    pprint.pprint(totalAmount)


if __name__ == "__main__":
    main()