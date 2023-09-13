import { Account, Client,ID,Databases } from "appwrite";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
.setProject('64ef162cc9f8fd86a147');               // Your project ID
export  const databases = new Databases(client);
    export  const account = new Account(client);
    export class AppwriteService {
      //create a new record of user inside appwrite

      async createUserAccount({email, password, name}) {
          try {
            const res = await account.create(ID.unique(), email, password, name);
      
              const promise = await databases.createDocument('64faed31a7aff8087750', '64fc60052476f26d9afc', res.$id, {
                   name:res.name,
                   email:res.email,
                   Joined:res.$createdAt,
                   emailVerification:res.emailVerification
                });

                console.log(promise);
              await account.createEmailSession(email,password);
              await account.createVerification("http://localhost:3000");
              console.log("email sent successfully!")
              toast.success("Verification email has been sent!");
              
          } catch (error) {
              console.log(error.message);
              throw error
          }
  
      
      }
  
      async login( { email, password }) {
         try {
              return await account.createEmailSession(email, password)
         } catch (error) {
            toast.error(`${error.message}`)
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
      async forgotPassword(userEmail) {
        try {
            console.log(userEmail)
            return await account.createRecovery(
                userEmail,
                "http://localhost:3000/reset-password"
              );
        } catch (error) {
            console.log("logout error: " + error)
            toast.error(`${error.message}`);
            throw error
        }
    }
    
      
  }
  
  const appwriteService = new AppwriteService()
  
  export default appwriteService




