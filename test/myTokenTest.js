const MyToken = artifacts.require("MyToken");

contract("MyToken", accounts => {
    const [owner, recipient, anotherAccount] = accounts;

    it("should put 1,000,000 MyToken in the first account", async () => {
        const instance = await MyToken.deployed();
        const balance = await instance.balanceOf(owner);
        assert.equal(balance.toString(), "1000000", "1,000,000 wasn't in the first account");
    });

    it("should transfer tokens correctly", async () => {
        const amount = 1000;
        const instance = await MyToken.deployed();

        const initialBalance = await instance.balanceOf(owner);
        await instance.transfer(recipient, amount, { from: owner });
        const finalBalance = await instance.balanceOf(owner);

        assert.equal(finalBalance.toString(), initialBalance.sub(amount).toString(), "Amount wasn't correctly taken from the sender");
        const recipientBalance = await instance.balanceOf(recipient);
        assert.equal(recipientBalance.toString(), amount.toString(), "Amount wasn't correctly sent to the recipient");
    });

    it("should not allow non-owners to mint tokens", async () => {
        const instance = await MyToken.deployed();
        try {
            await instance.mint(anotherAccount, 1000, { from: recipient });
        } catch (error) {
            assert(error.message.includes("Ownable: caller is not the owner"), "Non-owner was able to mint tokens");
        }
    });
});
