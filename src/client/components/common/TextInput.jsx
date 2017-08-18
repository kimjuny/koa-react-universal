import React, { PureComponent } from 'react';
import './styles/TextInput.less';

class TextInput extends PureComponent {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(event) {
    const { onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  onKeyPress(event) {
    const { onEnter } = this.props;
    if (typeof onEnter === 'function' && event.key === 'Enter') {
      onEnter();
    }
  }

  render() {
    const { placeholder, value } = this.props;

    return (
      <div>
        <input
          type="text"
          className="text-input"
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
      </div>
    );
  }
}

export default TextInput;
