import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

import { PrefectureConstants } from '../../assets/utils';

function Prefecture({
  type,
  prefecture,
  handleOnChange,
}) {
  const renderOptions = prefectures =>
    prefectures.map(({ en, kanji }) => (
      <option
        key={new Buffer(`${kanji}${en}`, 'utf8').toString('base64')}
        value={`${kanji}-${en}`}
      >{kanji} - {en}
      </option>
    ),
  );

  return (
    <div className="input__row">
      <div className="input__row--prefecture">
        <p>
          <IntlMsg id="checkout.shipping-address.prefecture" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Select
          errorClassName="is-invalid-input"
          name={`${type}Prefecture`}
          containerClassName=""
          validations={['required']}
          value={prefecture}
          onChange={handleOnChange}
        >
          <option value="">
            <IntlMsg id="checkout.shipping-address.prefecture.choose" />
          </option>
          {
            renderOptions(PrefectureConstants)
          };
        </Validation.components.Select>
      </div>
    </div>
  );
}
const PrefectureWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.Props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(Prefecture);

const { string, func } = PropTypes;
Prefecture.propTypes = {
  type: string.isRequired,
  prefecture: string.isRequired,
  handleOnChange: func.isRequired,
};
export default PrefectureWithLifecycle;
