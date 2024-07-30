// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract FlashLoan is ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;

    IERC20 public token;

    // Constructor now requires an initial owner and a token address
    constructor(address _token, address initialOwner) Ownable(initialOwner) {
        token = IERC20(_token);
    }

    function executeFlashLoan(uint256 amount) external nonReentrant {
        uint256 balanceBefore = token.balanceOf(address(this));
        require(balanceBefore >= amount, "Insufficient liquidity");

        token.safeTransfer(msg.sender, amount);

        // Execute the flash loan logic
        // The borrower must call back the contract with the loaned amount plus fees within the same transaction

        require(
            token.balanceOf(address(this)) >= balanceBefore,
            "Flash loan not repaid"
        );
    }

    // Function to deposit tokens into the contract for liquidity
    function deposit(uint256 amount) external onlyOwner {
        token.safeTransferFrom(msg.sender, address(this), amount);
    }

    // Function to withdraw tokens from the contract
    function withdraw(uint256 amount) external onlyOwner {
        token.safeTransfer(msg.sender, amount);
    }
}
