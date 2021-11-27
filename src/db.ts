import { Pool } from 'pg';

const connectionString = 'postgres://sqerfamv:iV1lRYEFdSdHofgssK7BJhqwhB2URKQI@kesavan.db.elephantsql.com/sqerfamv';

const db = new Pool({ connectionString });


export default db;