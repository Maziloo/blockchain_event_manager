// contracts/EventMarketplace.sol
pragma solidity ^0.8.0;

contract EventMarketplace {
    struct Event {
        uint256 id;
        string title;
        uint256 date;
        string location;
        uint256 price;
        address organizer;
        string imageHash; // IPFS hash for image
    }

    uint256 public eventCount;
    mapping(uint256 => Event) public events;
    mapping(address => uint256[]) public organizerEvents;

    event EventCreated(uint256 id, address organizer);

    function createEvent(
        string memory _title,
        uint256 _date,
        string memory _location,
        uint256 _price,
        string memory _imageHash
    ) public {
        eventCount++;
        events[eventCount] = Event(
            eventCount,
            _title,
            _date,
            _location,
            _price,
            msg.sender,
            _imageHash
        );
        organizerEvents[msg.sender].push(eventCount);
        emit EventCreated(eventCount, msg.sender);
    }

    function getEvents() public view returns (Event[] memory) {
        Event[] memory allEvents = new Event[](eventCount);
        for (uint256 i = 1; i <= eventCount; i++) {
            allEvents[i-1] = events[i];
        }
        return allEvents;
    }
}