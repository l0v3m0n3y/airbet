class airbet{
    constructor(){
        this.api = "https://api.airbet.io/api"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest","Content-Type":"application/vnd.api+json"}
    }
    async req(url, data,method="GET"){
    if (data) {
            method="POST"
            data = JSON.stringify(data);
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async register(email,password,nickname){
        return (await this.req(`${this.api}/register`,{"username":username,"email":email,"password":password}));
    }
    async game_list(category,sort,page){
        return(await this.req(`${this.api}/game/list?per_page=28&device=desktop&category=${category}&provider=&sort=${sort}&search_name=&page=${page}`))
    }
    async search_game(category,sort,page,name){
        return(await this.req(`${this.api}/game/list?per_page=28&device=desktop&category=${category}&provider=&sort=${sort}&search_name=${name}&page=${page}`))
    }
    async forgot_password(email){
        return(await this.req(`${this.api}/forgot-password`,{"email":email}))
    }
    async trending_game(){
        return(await this.req(`${this.api}/game/trending`))
    }
    async search_game(category,sort,page,name){
        return(await this.req(`${this.api}/countries`))
    }
}
module.exports = {airbet};