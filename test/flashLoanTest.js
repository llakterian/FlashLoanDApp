const FlashLoan = artifacts.require("FlashLoan");
const MyToken = artifacts.require("MyToken");

contract("FlashLoan", accounts => {
    const [owner, borrower] = accounts;

    it("should execute a flash loan successfully", async () => {
        const flashLoanInstance = await FlashLoan.deployed();
        const myTokenInstance = await MyToken.deployed();

        const loanAmount = 1000;
        await myTokenInstance.transfer(flashLoanInstance.address, loanAmount, { from: owner });

        const initialBalance = await myTokenInstance.balanceOf(borrower);
        await flashLoanInstance.executeFlashLoan(myTokenInstance.address, loanAmount, { from: borrower });
        const finalBalance = await myTokenInstance.balanceOf(borrower);

        assert.equal(finalBalance.toString(), initialBalance.toString(), "Flash loan did not execute correctly");
    });
});
