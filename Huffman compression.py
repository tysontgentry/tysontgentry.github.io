def count_frequencies(text):
    freq = {}
    i = 0

    while i < len(text):
        ch = text[i]
        if ch in freq:
            freq[ch] = freq[ch] + 1
        else:
            freq[ch] = 1
        i = i + 1

    return freq


def remove_smallest(nodes):
    smallest_index = 0
    i = 1

    while i < len(nodes):
        if nodes[i][1] < nodes[smallest_index][1]:
            smallest_index = i
        i = i + 1

    smallest_node = nodes[smallest_index]
    del nodes[smallest_index]
    return smallest_node


def build_tree(text):
    freq = count_frequencies(text)
    nodes = []

    for ch in freq:
        nodes.append([ch, freq[ch], None, None])

    while len(nodes) > 1:
        left = remove_smallest(nodes)
        right = remove_smallest(nodes)

        parent = [None, left[1] + right[1], left, right]
        nodes.append(parent)

    return nodes[0]


def make_codes(node, code, codes):
    if node[2] == None and node[3] == None:
        if code == "":
            codes[node[0]] = "0"
        else:
            codes[node[0]] = code
        return

    if node[2] != None:
        make_codes(node[2], code + "0", codes)

    if node[3] != None:
        make_codes(node[3], code + "1", codes)


def encode(text, codes):
    result = ""
    i = 0

    while i < len(text):
        result = result + codes[text[i]]
        i = i + 1

    return result


def decode(bits, root):
    result = ""
    current = root
    i = 0

    while i < len(bits):
        if bits[i] == "0":
            current = current[2]
        else:
            current = current[3]

        if current[2] == None and current[3] == None:
            result = result + current[0]
            current = root

        i = i + 1

    return result


def main():
    message = input("Enter a message: ")
    message = message.upper()

    root = build_tree(message)

    codes = {}
    make_codes(root, "", codes)

    print("Huffman Code:")
    for ch in codes:
        print("'" + ch + "'", codes[ch])

    encoded = encode(message, codes)
    print()
    print("Encoded message:")
    print(encoded)

    decoded = decode(encoded, root)
    print()
    print("Decoded message:")
    print(decoded)


main()