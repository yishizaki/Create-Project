QUnit.test("Test the validInterval function.", function (assert) {
    var num = "5";
    var result = validInterval(num);
    assert.deepEqual(result, "okay", "Valid interval code test passed.");
});
