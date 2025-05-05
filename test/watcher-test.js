import watcher from "../src/watcher";
const fs = require('fs');

beforeEach(() => {
    jest.clearAllMocks();
});

jest.mock("../src/watcher", () => {
    jest.requireActual("../src/watcher");
    watch = jest.fn();
});

test("Check that the directories are being watched", () => {
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

    jest.spyOn(watcher, "watch").mockReturnValue("watching!");

    const result = watcher.watch(watched, output, processed);

    expect(watcher.watch).toHaveBeenCalledTimes(1);
    expect(result).toBe("watching!");
});