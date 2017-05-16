import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { string, bool, oneOfType, oneOf, number } = PropTypes;

class ReactFBLike extends Component {
  static propTypes = {
    appId: string.isRequired,
    version: string.isRequired,
    language: string.isRequired,
    href: string.isRequired,
    layout: oneOf(['standard', 'box_count', 'button_count', 'button']),
    action: string,
    size: string,
    share: bool,
    showFaces: bool,
    width: oneOfType([string, number]),
    reference: string,
    colorscheme: string,
    kidDirectedSite: bool,
  };

  static defaultProps = {
    language: 'en_US',
    version: 'v2.8',
    layout: 'standard',
    action: 'like',
    size: 'small',
    share: true,
    showFaces: true,
    colorscheme: 'light',
    kidDirectedSite: false,
    width: '',
    reference: '',
  };

  componentDidMount() {
    const { language, appId, version } = this.props;
    if (document && typeof document !== 'undefined') {
      ((d, s, id) => {
        const fjs = d.getElementsByTagName(s)[d.getElementsByTagName(s).length - 1];
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = `//connect.facebook.net/${language}/sdk.js#xfbml=1&version=${version}&appId=${appId}`;
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }

  render() {
    const { href, layout, action, size, share, showFaces, reference, width, colorscheme, kidDirectedSite } = this.props;
    return (
      <div
        className="fb-like"
        data-href={href}
        data-layout={layout}
        data-action={action}
        data-size={size}
        data-show-faces={showFaces}
        data-share={share}
        data-width={width}
        data-ref={reference}
        data-colorscheme={colorscheme}
        data-kid-directed-site={kidDirectedSite}
      />
    );
  }
}
export default ReactFBLike;
