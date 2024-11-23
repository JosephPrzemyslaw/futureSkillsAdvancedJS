function getPhone(home) {
  const myPhoneRegex = /^[0-9]{9}$/;

  const phone = {
    setHome(home) {
      if (myPhoneRegex.test(home)) {
        this.home = home;
      } else {
        throw new Error("unvalidate phone number");
      }
    },
  };
  phone.setHome(home);

  return phone;
}

function test(phoneNo) {
  try {
    const somePhone = getPhone(phoneNo);
    //...
    console.log(`Phone: ${phoneNo} created`);
  } catch (err) {
    console.error(err.message);
  }
}

test("123456789");
test("1234AB789");
test("123");
test("1234567890");
test("");
