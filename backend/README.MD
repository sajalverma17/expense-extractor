# Setup guide

* Set your customer ID and credentials as environment variables named `CUSTOMERID`, `CLIENTID` and `SECRET`, respectively.
* Requires Python 3
* Requires python package ``requests_oauthlib``:
* Requires python package ``fastapi``:

```
sudo apt install uvicorn
pip install requests-oauthlib
pip install fastapi
```

* From the cli:

```
python3 extractor.py [startDate] [endDate] [keyword]
```

* From the api (requires uvicorn apt package installed):

```
uvicorn api:app --uvicorn
```

