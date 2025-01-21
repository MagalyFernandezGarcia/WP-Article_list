
const {VITE_URL_WP} = import.meta.env.VITE_URL_WP
export async function LoginUser(username: string, password: string) :Promise<Boolean>{
    const formData = new URLSearchParams()
    formData.append('log', username)
    formData.append('pwd', password)

    try{
        const response = await fetch(VITE_URL_WP + 'wp-login.php', { 
            method: 'POST', 
            headers :{"constent-Type" : "application/x-www-form-urlencoded"},
            body : formData.toString(),
            credentials: 'include'
        })
           
        return response.ok
    }catch(error){
        console.error("Erreur lors de la connexion" , error)
        throw error
    }
            
      
    
    
    
}