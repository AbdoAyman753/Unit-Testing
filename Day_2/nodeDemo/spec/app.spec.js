const supertest = require("supertest");
const server = require("../app");
const postModel = require("../models/post");

var req = supertest(server);
describe("POST  /posts", () => {
	it("save new post", async () => {
		var data = {
			title: "new title",
			content: "new content",
		};

		var response = await req.post("/posts").send(data);

		expect(response.status).toEqual(201);
		expect(response.body._id).toBeDefined();

		var post = await postModel.findById(response.body._id);

		expect(post).toBeTruthy();
	});
});

describe("GET  /posts", () => {
	it("get all posts", async () => {
		var response = await req.get("/posts");

		expect(response.status).toEqual(200);
		expect(response.body.length).toBeGreaterThan(0);
		console.log(response.body);
	});
});
