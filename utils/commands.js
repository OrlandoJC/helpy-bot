const { matchers } = require( "../matchers/matchers.config")

/**
 * Checks if command provided is a valid command
 * 
 * @param {string} command
 * @return {boolean} boolean
 */
const isCommand = (command) => {
    return matchers
        .some(matcher => matcher.test(command) )
}

/**
 * Returns command estructure splited
 *  `prefix-action-params`
 * 
 * @param {string} command
 * @return {array} array of elements
 */
const decomposeCommand = (command) => {
    return [prefix, action, ...params] = command.split(" ")
}

module.exports = {
    isCommand,
    decomposeCommand
}