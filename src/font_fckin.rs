static ASCII: [char; 62] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

static SQUARED_ALPHA: [char; 62] = [
    '🄰', '🄱', '🄲', '🄳', '🄴', '🄵', '🄶', '🄷', '🄸',
    '🄹', '🄺', '🄻', '🄼', '🄽', '🄾', '🄿', '🅀', '🅁',
    '🅂', '🅃', '🅄', '🅅', '🅆', '🅇', '🅈', '🅉',
    '🄰', '🄱', '🄲', '🄳', '🄴', '🄵', '🄶', '🄷', '🄸',
    '🄹', '🄺', '🄻', '🄼', '🄽', '🄾', '🄿', '🅀', '🅁',
    '🅂', '🅃', '🅄', '🅅', '🅆', '🅇', '🅈', '🅉',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

static CIRCLED_ALPHA: [char; 62] = [
    '🅐', '🅑', '🅒', '🅓', '🅔', '🅕', '🅖', '🅗', '🅘',
    '🅙', '🅚', '🅛', '🅜', '🅝', '🅞', '🅟', '🅠', '🅡',
    '🅢', '🅣', '🅤', '🅥', '🅦', '🅧', '🅨', '🅩',
    '🅐', '🅑', '🅒', '🅓', '🅔', '🅕', '🅖', '🅗', '🅘',
    '🅙', '🅚', '🅛', '🅜', '🅝', '🅞', '🅟', '🅠', '🅡',
    '🅢', '🅣', '🅤', '🅥', '🅦', '🅧', '🅨', '🅩',
    '➊', '➋', '➌', '➍', '➎', '➏', '➐', '➑', '➒', '⓪'
];

static CURVY_ALPHA: [char; 62] = [
    'ค', '๒', 'ς', '๔', 'є', 'Ŧ', 'ﻮ', 'ђ', 'เ',
    'ן', 'к', 'ɭ', '๓', 'ภ', '๏', 'ק', 'ợ', 'г',
    'ร', 'Շ', 'ย', 'ש', 'ฬ', 'א', 'ץ', 'չ',
    'ค', '๒', 'ς', '๔', 'є', 'Ŧ', 'ﻮ', 'ђ', 'เ',
    'ן', 'к', 'ɭ', '๓', 'ภ', '๏', 'ק', 'ợ', 'г',
    'ร', 'Շ', 'ย', 'ש', 'ฬ', 'א', 'ץ', 'չ',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

static ROUNDED_ALPHA: [char; 62] = [
    'ᗩ', 'ᗷ', 'ᑕ', 'ᗞ', 'ᗴ', 'ᖴ', 'G', 'ᕼ', 'I',
    'ᒍ', 'K', 'ᒪ', 'ᗰ', 'ᑎ', 'O', 'ᑭ', 'ᑫ', 'ᖇ',
    'ᔕ', 'T', 'ᑌ', 'ᐯ', 'ᗯ', '᙭', 'Y', 'ᘔ',
    'ᗩ', 'ᗷ', 'ᑕ', 'ᗞ', 'ᗴ', 'ᖴ', 'G', 'ᕼ', 'I',
    'ᒍ', 'K', 'ᒪ', 'ᗰ', 'ᑎ', 'O', 'ᑭ', 'ᑫ', 'ᖇ',
    'ᔕ', 'T', 'ᑌ', 'ᐯ', 'ᗯ', '᙭', 'Y', 'ᘔ',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

static BOLD_ALPHA: [char; 62] = [
    '𝓐', '𝓑', '𝓒', '𝓓', '𝓔', '𝓕', '𝓖', '𝓗', '𝓘',
    '𝓙', '𝓚', '𝓛', '𝓜', '𝓝', '𝓞', '𝓟', '𝓠', '𝓡',
    '𝓢', '𝓣', '𝓤', '𝓥', '𝓦', '𝓧', '𝓨', '𝓩',
    '𝓪', '𝓫', '𝓬', '𝓭', '𝓮', '𝓯', '𝓰', '𝓱', '𝓲',
    '𝓳', '𝓴', '𝓵', '𝓶', '𝓷', '𝓸', '𝓹', '𝓺', '𝓻',
    '𝓼', '𝓽', '𝓾', '𝓿', '𝔀', '𝔁', '𝔂', '𝔃',
    '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗', '𝟎'
];

static GOTHIC_ALPHA: [char; 62] = [
    '𝔄', '𝔅', 'ℭ', '𝔇', '𝔈', '𝔉', '𝔊', 'ℌ', 'ℑ',
    '𝔍', '𝔎', '𝔏', '𝔐', '𝔑', '𝔒', '𝔓', '𝔔', 'ℜ',
    '𝔖', '𝔗', '𝔘', '𝔙', '𝔚', '𝔛', '𝔜', 'ℨ',
    '𝔞', '𝔟', '𝔠', '𝔡', '𝔢', '𝔣', '𝔤', '𝔥', '𝔦',
    '𝔧', '𝔨', '𝔩', '𝔪', '𝔫', '𝔬', '𝔭', '𝔮', '𝔯',
    '𝔰', '𝔱', '𝔲', '𝔳', '𝔴', '𝔵', '𝔶', '𝔷',
    '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗', '𝟎'
];

static CROSSED_ALPHA: [char; 62] = [
    '₳', '฿', '₵', 'Đ', 'Ɇ', '₣', '₲', 'Ⱨ', 'ł',
    'J', '₭', 'Ⱡ', '₥', '₦', 'Ø', '₱', 'Q', 'Ɽ',
    '₴', '₮', 'Ʉ', 'V', '₩', 'Ӿ', 'Ɏ', 'Ⱬ',
    '₳', '฿', '₵', 'Đ', 'Ɇ', '₣', '₲', 'Ⱨ', 'ł',
    'J', '₭', 'Ⱡ', '₥', '₦', 'Ø', '₱', 'Q', 'Ɽ',
    '₴', '₮', 'Ʉ', 'V', '₩', 'Ӿ', 'Ɏ', 'Ⱬ',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

static CURSIVE_ALPHA: [char; 62] = [
    'α', 'ɓ', '૮', '∂', 'ε', 'ƒ', 'ɠ', 'ɦ', 'เ',
    'ʝ', 'ҡ', 'ℓ', 'ɱ', 'ɳ', 'σ', 'ρ', 'φ', '૨',
    'ร', 'ƭ', 'µ', 'ѵ', 'ω', 'א', 'ყ', 'ƶ',
    'α', 'ɓ', '૮', '∂', 'ε', 'ƒ', 'ɠ', 'ɦ', 'เ',
    'ʝ', 'ҡ', 'ℓ', 'ɱ', 'ɳ', 'σ', 'ρ', 'φ', '૨',
    'ร', 'ƭ', 'µ', 'ѵ', 'ω', 'א', 'ყ', 'ƶ',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

static UPSIDEDOWN_ALPHA: [char; 62] = [
    '∀', 'ᙠ', 'Ɔ', 'ᗡ', 'Ǝ', 'Ⅎ', '⅁', 'H', 'I',
    'ſ', '⋊', '˥', 'W', 'N', 'O', 'Ԁ', 'Ό', 'ᴚ',
    'S', '⊥', '∩', 'Λ', 'M', 'X', '⅄', 'Z',
    'ɐ', 'q', 'ɔ', 'p', 'ǝ', 'ɟ', 'ɓ', 'ɥ', 'ı',
    'ɾ', 'ʞ', 'l', 'ɯ', 'u', 'o', 'd', 'b', 'ɹ',
    's', 'ʇ', 'n', 'ʌ', 'ʍ', 'x', 'ʎ', 'z',
    '⇂', 'ᄅ', 'Ɛ', 'ㄣ', 'ގ', '9', 'ㄥ', '8', '6', '0'
];

static GLITCH_ALPHA: [&str; 62] = [
    "A̸͚̣̙̟͚̘̪̅͜", "B̵̻̯̾̈́̚͘", "Ç̵̛̝͍͈̖̱̓̒̌̌̉̃͆͐", "D̴͓͛̓͠", "Ĕ̸̜̜̯̪͒͂̈́͠", "F̶̢̝̖̭̳̜̙̱͓̬̒̌͋́̌͋͋̆̋̇", "Ǵ̶̡̦͕͙̖̟̿", "Ḧ̶̺̼͚̬̤͎̲̊̇͗͗̕͜͠", "Ì̷̡̫͓̤̗̰̙͊̄̄̔͐͋̌̅ͅ",
    "J̵̲̖̺̯͇̣̹̦̉̇̀͐", "Ķ̵̡̖̟̭̟͉̺̲̝̀̽̓͂̚", "L̴̖̹̱̙̽̔̒̂̀̽͂͝", "M̴̨̝͎̮̘̬̫̥̦̋̆̉̅̓̓̃̚͠", "N̶̛̹̼̊̅̀̈́͛͠͝", "Ơ̵̢̤͇̋̒̉̊͘͘͝", "P̵̙̈́͌̀̀͜", "Q̷̼̄", "Ŗ̷̱̤͖̜̐͜",
    "S̷̝̜͗͗̓̀̚", "T̶̼͚̤̩͉͖̠͖̙̩̿̃͋͆̿̈́̚̕̕", "U̷̗͙͊̏͌͑", "V̴̤̥̲̖̰̇͘͠", "W̵̛̥̳̐̔̑͗͝͝", "X̸̮̼̖̪͑̃͋̔̒̀̎", "Y̴̹͙̱̜͋̇̀̔͗̈́͝", "Ž̶̤̔̊͌͛͂̀̊",
    "a̵͍̖̝͙̗̪͈̹̻͐͜", "b̵̡̯͕̝̟̽̓͆̆̓́̃̊͝", "c̵̝̣̮͙̮̝̝̓̃̎͋̾", "d̶̡̛̼̫͎͂̓͋̒̍̏̉̈͜", "e̷̝̦̼͙͓̟̺͆͑̓͋̏͘͜", "f̶̡̎̀̌͂̐̈͆̾͠", "g̴̨̣͖͎͈̹̔̽̀̓̀͜͝͠", "h̴̢̜̰͚̥̤̭̐́́́͗͌̊̅̑", "ì̸̡̱̥̮̤̗͉̒͆̀̍͂͒͒̅͗",
    "j̷̳̹̣̪̗͕͎̈́͂̅͌", "k̷̢̧͈̲͈̭͎̳̑̏͒̌̊", "l̴͚̐̆́̑̀̆͌̚͜", "m̸̯̋̏͐̊̋͌͂", "n̶͉̖̥͐͛̉̽̄̈́", "ỏ̷̪̠̙̜̪̉͠ͅͅ", "p̶̧͖̞̦̩̬̙̺͓̌̈́̓̍̄͐̓̎̚͜", "q̶̨̛̞̳̲̖̪͓͎̍͐̾̽̽͝ͅ", "ŗ̴̧͈̯̬̃̊̾̈̎̚̚ͅ",
    "ś̷̖̹̼̝̳̙̌̓̄̽͛̕", "t̴̛͈̺̻̻̞̲̜̰͗̔̽̑", "u̴͎̮͙͙̖̣̟̍", "v̴̨̦̣̯̿͜͜", "w̴͉̽̅̂͆͛̐̄", "x̷̢̘̤͖͍͐̅͠", "ỹ̵͇̼̈́", "z̴̭̮͕̺̅̈́͑̄̔̀͝",
    "1̵̨̣̀̊̓̀͛͛̓", "2̸̳̞͂", "3̶̨̬̼̝̩̮̝̭̬͑̕͜", "4̸̢̼̙͐̊̅̔̄", "̨̗̝̣̥͙̘5̸̡͈̳̺̬̼͔̹̼̏̎͂͌̿̐͂̎", "6̷̨̛̜̪̗͙̦̘̩͕̂̀̇̆͐̃̈", "7̸̫͉̖̙̀̅̅̏̈́͛", "8̸̡̗͎̫̼̥̔̑̑̏̕", "9̵̗̘̰̅͑̄̅̀͐͊͘͝", "0̵͚̿̓̎͆̅̾̌͒"
];

pub fn header_fck(text: String, font: &str) -> String {
    if font == "square" {
        return fck(text, SQUARED_ALPHA);
    } else {
        return fck(text, CIRCLED_ALPHA);
    }
}

pub fn blockquote_fck(text: String) -> String {
    fck(text, GOTHIC_ALPHA)
}

pub fn italic_fck(text: String) -> String {
    fck(text, BOLD_ALPHA)
}

pub fn bold_fck(text: String) -> String {
    fck(text, ROUNDED_ALPHA)
}

pub fn hashtag_fck(text: String) -> String {
    fck(text, CURVY_ALPHA)
}

pub fn code_fck(text: String) -> String {
    fck(text, CROSSED_ALPHA)
}

pub fn list_fck(text: String) -> String {
    fck(text, CURSIVE_ALPHA)
}

pub fn link_fck(text: String) -> String {
    fck(text, UPSIDEDOWN_ALPHA)
}

pub fn fck(text: String, font_style: [char; 62]) -> String {
    let chars: Vec<char> = text.chars().collect();
    let mut in_tag = false;
    let mut transformed = Vec::new();
    for char in chars {
        if char.to_string() == "<" {
            in_tag = true;
        }
        if char.to_string() == ">" {
            in_tag = false;
        }
        if !in_tag {
            let idx = ASCII.iter().position(|&a| a == char);
            match idx {
                Some(i) => transformed.push(font_style[i]),
                None => transformed.push(char),
            }
        } else {
            transformed.push(char);
        }
    }
    transformed.into_iter().collect::<String>()
}

pub fn glitched_fck(text: String) -> String {
    let chars: Vec<char> = text.chars().collect();
    let mut transformed = Vec::new();
    for char in chars {
        let idx = ASCII.iter().position(|&a| a == char);
        match idx {
            Some(i) => transformed.push(GLITCH_ALPHA[i].to_string()),
            None => transformed.push(char.to_string()),
        }
    }
    transformed.into_iter().collect::<String>()
}
