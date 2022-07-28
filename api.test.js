const request = require("supertest")("http://localhost:3000");
const expect = require("chai").expect;

describe("GET /iecho?text=gonzalo", function () {
  it("Returns false for palindrome", async function () {
    const response = await request.get("/iecho?text=gonzalo");    
    console.log(response.body);
    expect(response.status).to.eql(200);
    expect(response.body).to.eql({ text: 'gonzalo', palindrome: 'false', reversed: 'olaznog' });
  });
});

describe("GET /iecho?text=anana", function () {
  it("Returns true for palindrome", async function () {
    const response = await request.get("/iecho?text=anana"); 
    console.log(response.body)   
    expect(response.status).to.eql(200);
    expect(response.body).to.eql({ text: 'anana', palindrome: 'true', reversed: 'anana' });
  });
});

describe("GET /iecho?text=", function () {
  it("Returns true for palindrome", async function () {
    const response = await request.get("/iecho?text=");   
    console.log(response.body) 
    expect(response.status).to.eql(400);
    expect(response.body).to.eql({ error: "text is required" });
  });
});