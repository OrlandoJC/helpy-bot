const assert = require("chai").assert
const expect = require("chai").expect

const commands = require('../utils/commands')

describe('utils test', () => { 
    describe("Testing command structure utils function", () => {
        it("checks if command is valid or exists in the bot", () => {
            expect(commands.isCommand("helpy unroll thread")).to.equal(true)
        })
    
        it("checks if command is invalid and not exists in the bot", () => {
            expect(commands.isCommand("helpyunroll thread")).to.equal(false)
            expect(commands.isCommand("helpyunroll thread")).to.equal(false)
            expect(commands.isCommand("helpy")).to.equal(false)
        })
    }) 
 })
