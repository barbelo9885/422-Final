//import service from "../src/service";
const path = require('path');
const config = require('../src/config.json');

beforeEach(() => {
    jest.clearAllMocks(); 
});

test("Check for new directories created", () => {
    // output directories
    const inbound = path.dirname("../inbound");
    const outbound = path.dirname("../outbound");
    const processed = path.dirname("../processed");

    expect(inbound).toBe("inbound");
    expect(outbound).toBe("outbound");
    expect(processed).toBe("processed");
});