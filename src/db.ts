import { Pool } from 'pg';

const connectionString = '**********@kesavan.db.elephantsql.com/sqerfamv';

const db = new Pool({ connectionString });


export default db;
