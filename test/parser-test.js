import parser from "../src/parser";
import watcher from "../src/watcher";

beforeEach(() => {
    jest.clearAllMocks();
});

jest.mock("../src/parser", () => {
    jest.requireActual("../src/parser");
    processChange = jest.fn();
});

// test that a json file was parsed
test("Check that a json file was parsed", () => {
    // Getting full paths for all three directories
    const watched = path.join(__dirname, config.watched);
    const output = path.join(__dirname, config.output);
    const processed = path.join(__dirname, config.processed);

    // create directories if necessary
    if (!fs.existsSync(watched)) {
        fs.mkdirSync(watched);
    }
    
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output);
    }
    
    if (!fs.existsSync(processed)) {
        fs.mkdirSync(processed);
    }
    
    const mockInput = "FirstName,LastName,DOB,EmailAddress,Address,SSN,PhoneNumber,InsuranceID,InsuranceCarrier,Symptoms,Diagnosis";
    
    jest.spyOn(parser, "setWatched")
    jest.spyOn(parser, "setOutput")
    jest.spyOn(parser, "setProcessed")
    jest.spyOn(parser, "processChange").mockReturnValue("parsing csv to json");

    // invoke tests
    watcher.watch(watched, output, processed);
    const result = parser.processChange("file.csv");

    expect(parser.setWatched).toHaveBeenCalledTimes(1);
    expect(parser.setOutput).toHaveBeenCalledTimes(1);
    expect(parser.setProcessed).toHaveBeenCalledTimes(1);
    expect(result).toBe("parsing csv to json");

    
});