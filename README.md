# Desafio Dev


## Iniciando o projeto

```
   [RUNNING THE PROJECT]
   
   - First clone the repository $git clone https://github.com/tiagotvc/desafio-dev
   - Open the folder and open a new terminal
   - Type docker-compose up --build

```

## ENDPOINTS

### [Sending File [POST]]

```
      *Needs to send a txt file called file in FormData .
      *Will parse all data to database.
      http://localhost:3001/api/fileParse
      


```    
### [Load Data (Get)] 
      
```
    *Load all parsed data from database
    http://localhost:3001/api/loadParsedData
    

```

### [Unit Tests]

```
    In front end just run npm test inside front-end folder
    In back end need to upload some file before, after just run npm test inside
    back-end/fileParseApi folder


```