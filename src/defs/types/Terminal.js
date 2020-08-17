import PropTypes from 'prop-types'

const styleTypes = {
  style: PropTypes.object,
  contentStyle: PropTypes.object,
  inputAreaStyle: PropTypes.object,
  promptLabelStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  inputTextStyle: PropTypes.object
}

const classNameTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  inputAreaClassName: PropTypes.string,
  promptLabelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  inputTextClassName: PropTypes.string
}

const optionTypes = {
  autoFocus: PropTypes.bool,
  dangerMode: PropTypes.bool,
  styleEchoBack: PropTypes.oneOf([
    'labelOnly', // Only persist label style
    'textOnly', // Only persist text style
    'inherit', // Persist entire prompt style
    'message' // Inherit message style
    // (undefined signifies default behaviour)
    // Not offering individual options for message styling as messages only have one uniform style for the entire element per the spec
  ]),
  disabled: PropTypes.bool,
  disableOnProcess: PropTypes.bool,
  ignoreCommandCase: PropTypes.bool,
  noDefaults: PropTypes.bool,
  noEchoBack: PropTypes.bool,
  noHistory: PropTypes.bool,
  noAutoScroll: PropTypes.bool,
  noNewlineParsing: PropTypes.bool
}

const labelTypes = {
  welcomeMessage: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  promptLabel: PropTypes.node,
  errorText: PropTypes.string
}

const commandTypes = {
  commands: PropTypes.object.isRequired, // Cannot validate beyond this because names are dynamic
  commandCallback: PropTypes.func
}

const messageTypes = {
  messageStyle: PropTypes.object,
  messageClassName: PropTypes.string
}

export default {
  ...styleTypes,
  ...classNameTypes,
  ...optionTypes,
  ...labelTypes,
  ...commandTypes,
  ...messageTypes
}
