
import { Pool } from 'pg'

export const pool = new Pool(
{
host:'ec2-107-20-127-127.compute-1.amazonaws.com',
user:'ddjpcjppbssvti',
password:'1180c937e13da2bb19063f789af6fabe51d4467ba5b96642f57532ccfeebda1b',
database:'d38gg5h28timb7',
port:5432,
ssl: { rejectUnauthorized: false}

}
);