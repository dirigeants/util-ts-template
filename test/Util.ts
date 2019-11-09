import ava from 'ava';
import Util from '../dist';

ava('sample test', (test): void => {
	test.is(Util(), 'bar');
});
