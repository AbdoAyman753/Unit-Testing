const supertest = require('supertest');
const server = require('../index');
const User = require('../models/user');

const req = supertest(server);
describe('Post /users',()=>{

    it('Register new user',async ()=>{
        var data = {
            email:'abdo@gmail.com',
            password: 'helloFromTest'
        }
        var res = await req.post('/users').send(data);

        expect(res.status).toEqual(201);
        expect(res.body._id).toBeDefined();
    });
    
});