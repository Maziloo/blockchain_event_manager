// contracts/EventMarketplace.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventMarketplace {
    struct Event {
        uint256 id;
        string name;
        uint256 date;
        uint256 ticketPrice;
        address organizer;
    }

    uint256 public eventCount;
    mapping(uint256 => Event) public events;

    event EventCreated(uint256 id, string name, address organizer);

    function createEvent(
        string memory _name,
        uint256 _date,
        uint256 _ticketPrice
    ) public {
        eventCount++;
        events[eventCount] = Event(
            eventCount,
            _name,
            _date,
            _ticketPrice,
            msg.sender
        );
        emit EventCreated(eventCount, _name, msg.sender);
    }

    function getEvent(uint256 _id) public view returns (Event memory) {
        return events[_id];
    }
}