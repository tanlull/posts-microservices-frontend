# Run 
>npm run start

http://localhost:3000

# Run Post
> cd /Posts
> npm run start:dev

http://localhost:8000/api/posts


# Run Comment 

> cd /Comments
> npm run start:dev

http://localhost:8001/api/posts


# Docker MySQL

> docker network create tan-network

> docker run --restart=always --net tan-network --network-alias db --name tan-mysql -v c:/tan-mysql-data:/var/lib/mysql -p 13306:3306 -e MYSQL_ROOT_PASSWORD=toor -d mysql:8

### Video Tutorial
https://morioh.com/p/38a00add763d?f=5c21fb01c16e2556b555ab32&fbclid=IwAR392Tlzdv7AgiqtTNWWZ9VLuZJHOGgkKxguZ5OSc7aELUXHm6igk5QUfrw

Time: 21.45