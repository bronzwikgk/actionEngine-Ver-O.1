JSON = null
or true or false
or JSONNumber (numbers must contain no whitespace)
or JSONString
or JSONObject
or JSONArray

JSONNumber = - PositiveNumber
or PositiveNumber
PositiveNumber = DecimalNumber
or DecimalNumber.Digits
or DecimalNumber.Digits ExponentPart
or DecimalNumber ExponentPart
DecimalNumber = 0
or OneToNine Digits
ExponentPart = e Exponent
or E Exponent
Exponent = Digits
or + Digits
or - Digits
Digits = Digit
or Digits Digit
Digit = 0 through 9
OneToNine = 1 through 9

JSONString = ""
or " StringCharacters "
StringCharacters = StringCharacter
or StringCharacters StringCharacter
StringCharacter = any character
except " or \ or U+0000 through U+001F
or EscapeSequence
EscapeSequence = \" or \/ or \\ or \b or \f or \n or \r or \t
or \u HexDigit HexDigit HexDigit HexDigit
HexDigit = 0 through 9
or A through F
or a through f

JSONObject = {}
or { Members }
Members = JSONString : JSON
or Members, JSONString : JSON

JSONArray = []
or[ArrayElements]
ArrayElements = JSON
or ArrayElements, JSON