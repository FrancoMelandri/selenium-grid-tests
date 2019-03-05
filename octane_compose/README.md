# Octane con dump di prod al 4 dicembre 2018

Avviare docker-compose per build immagine db con dump prod e prima installazione octane

```
docker-compose up
```

Attendere avvio octane e import dump (verifica da docker logs)

Stop docker-compose
Avvio update_octane.sh con privilegi

```
sudo sh update_octane.sh
```

Riavvio docker-compose 

```
docker-compose up
```


Dati di accesso:

```
user: octane.admin
password: OCTane123
```

autenticazione api:

```
curl -L -c testcookiejar -X POST \
  http://localhost:8080/authentication/sign_in \
  -H 'content-type: application/json' \
  -d '{ 
     "client_id": "PC_Romano_7593m5n87kle5cg4ndo6mz40l", 
     "client_secret": "$88e32cf6f66604fG" 
}' -v
```

esempio call defect:
```
curl -L -b testcookiejar  -X GET \
'http://localhost:8080/api/shared_spaces/2001/workspaces/1003/defects' -v
```