import { Account, Client,ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64ef162cc9f8fd86a147');               // Your project ID
    const account = new Account(client);
    export class AppwriteService {
      //create a new record of user inside appwrite
      async createUserAccount({email, password, name}) {
          try {
              const userAccount = await account.create(ID.unique(), email, password, name)
              if (userAccount) {
                  return this.login({email, password})
              } else {
                  return userAccount
              }    
          } catch (error) {
              throw error
          }
  
      
      }
  
      async login( { email, password }) {
         try {
              return await account.createEmailSession(email, password)
         } catch (error) {
           throw error
         }
      }
  
      async isLoggedIn() {
          try {
              const data = await this.getCurrentUser();
              return Boolean(data)
          } catch (error) {}
  
          return false
      }
  
      async getCurrentUser() {
          try {
              return account.get()
          } catch (error) {
              console.log("getcurrentUser error: " + error)
              
          }
  
          return null
      }
  
      async logout() {
          try {
              return await account.deleteSession("current")
          } catch (error) {
              console.log("logout error: " + error)
          }
      }
  
      
  }
  
  const appwriteService = new AppwriteService()
  
  export { appwriteService };




