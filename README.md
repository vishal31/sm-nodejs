# sm-nodejs
api for adding name, email and salary. And api for salary where you can enter salary and sort by less than or greater than

# database setup for you
host : 'localhost'
database name : 'sm-assignment'
username : 'root'
password : ''

# endpoints

/insert [method : POST]
  
  -- fields ---
        name   
        email  
        salary 


/fetch    [method : GET]

 -- fields ---
    no field required
    
/delete   [method : DELETE]

   -- fields ---
        id
        eg : id = 1
        
        
        
/salary   [method : POST]

 -- fields ---
 
 salary [eg : salary = 200 ]
 sortBy  [eg : sortBy = 'less than' or sortBy = 'greater than']




