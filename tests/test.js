const { assert } = require('console')

const Token = artifacts.require('Dragon Eye')

require('chai')
.use(require('chai-as-promised'))
.should()

contract('Dragon Eye', (accounts) => {
    describe('Contract deployment', async () =>{
        let token = await Token.new("ipfs://bafybeicftbba47y4tncdnqkrxd34ytkaqmfiquywrkcrny37v6ofdtgxki/")
        const name = token.name()
        assert.equal(name, 'Dragon Eye')
    })
})