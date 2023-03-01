import kue from 'kue';

const queue = kue.createQueue();

const jobModel = {
  phoneNumber: 'string',
  message: 'string',
}

const job = queue.create('push_notification_code', jobModel)
                .save((err) => {
                  if (err == undefined) {
                    console.log(`Notification job created: ${job.id}`);
                  }
                });

job.on('complete', (err) => {
  if (err == undefined) {
   console.log('Notification job completed');
  }
}).on('failed', (err) => {
  console.log('Notification job failed');
})