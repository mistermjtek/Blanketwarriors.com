import { exec } from 'child_process';
import path from 'path';
import _ from 'lodash';

function updateBlog(req, res) {
	console.log('updating...');
  exec('./updateBlog.sh',{ cwd: path.join(__dirname, '../../') } , (error, stdout, stderr) => {
    if(error || stderr) {
      console.log('exec error:', error);
      console.log('std error:', stderr);
      res.send('Blog Error!');
      return;
    }else {
      res.send('Blog Updated!');
    }
  });
};

export default _.debounce(updateBlog, 60000);
