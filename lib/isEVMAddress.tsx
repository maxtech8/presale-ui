const isEVMAddress = (address) => /^(0x)?[0-9a-f]{40}$/i.test(address)

export default isEVMAddress
