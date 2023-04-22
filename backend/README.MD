# Setup guide

* Set your customer ID and credentials as environment variables named `CUSTOMERID`, `CLIENTID` and `SECRET`, respectively.
* Requires Python 3
* Requires package ``requests_oauthlib``:
* Requires package ``fastapi``:

```
pip install requests-oauthlib
pip install fastapi
```

* From the cli:

```
python3 extractor.py [startDate] [endDate] [keyword]
```
