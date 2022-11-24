 import axios from "axios";
 import { parseCookies} from 'nookies'
 let cookies = parseCookies();
 
 
 export const api = axios.create({
     baseURL:process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3030/api',
     headers: {
        Authorization: `Bearer ${cookies['ng.token']}`
      }
 })