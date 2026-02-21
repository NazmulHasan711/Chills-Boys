import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

function Dropdowns() {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="None" className="font-bold">
            <i class="fa-regular fa-face-grin"></i> Account{" "}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new">My Profile</DropdownItem>
          <DropdownItem key="copy">My History</DropdownItem>
          <DropdownItem key="edit">Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default Dropdowns;
