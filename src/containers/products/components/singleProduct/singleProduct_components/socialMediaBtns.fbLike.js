import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactFBLike extends Component {
  static propTypes = {
    appId: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    layout: PropTypes.oneOf(['standard', 'box_count', 'button_count', 'button']),
    action: PropTypes.string,
    size: PropTypes.string,
    share: PropTypes.bool,
    showFaces: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    reference: PropTypes.string,
    colorscheme: PropTypes.string,
    kidDirectedSite: PropTypes.bool,
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
