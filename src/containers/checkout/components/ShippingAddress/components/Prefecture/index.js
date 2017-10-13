import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import { PrefectureConstants } from '../../assets/utils';
import './assets/styles/style.css';

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
    <div className="prefecture-section__container">
      <label className="form__label" htmlFor="Prefecture">
        <IntlMsg id="checkout.shipping-address.prefecture" />&nbsp;
        <strong className="label__asterisk">*</strong>
      </label>
      <Validation.components.Select
        errorClassName="form__error-blurb"
        name={`${type}Prefecture`}
        containerClassName="container__text-field"
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
