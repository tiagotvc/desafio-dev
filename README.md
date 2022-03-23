# Desafio SearchApp


## Iniciando o projeto

```
   [RUNNING THE PROJECT]
   
   - First clone the repository $git clone https://github.com/tiagotvc/desafio-dev
   - Open the folder and open a new terminal
   - Type docker-compose up --build

```

# ENDPOINTS

## [Sending File [POST]]

```
      http://localhost:3001/api/fileParse
      Needs to send a txt file called file in FormData .
      Will parse all data to database.


```    
## [Load Data (Get)] 
      
```
    http://localhost:3001/api/loadParsedData,
    Load all parsed data from database

```

## [Unit Tests]

```
    In front end just run npm test inside front-end folder
    In back end need to upload some file before, after just run npm test inside
     back-end/fileParseApi folder


```