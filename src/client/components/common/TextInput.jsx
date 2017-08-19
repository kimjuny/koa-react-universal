import React, { PureComponent } from 'react';
import classNames from 'classnames';
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
    const { placeholder, value, size, theme } = this.props;

    const className = classNames({
      'text-input': true,
      'text-input-lg': !size || size === 'lg',
      'text-input-sm': size === 'sm',
      'text-input-white': !theme || theme === 'white',
      'text-input-dark': theme === 'dark',
    });

    return (
      <div>
        <input
          type="text"
          className={className}
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
