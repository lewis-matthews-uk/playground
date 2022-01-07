const refreshSeconds = 10;
const envs = ['production', 'develop'];
const container = document.getElementById('container');

envs.map((env) => {
    const div = document.createElement('div');
    container.append(div);
    const label = document.createElement('label');
    label.innerText = 'Environment: ' + env;
    div.append(label);
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', '/pub/envs/' + env);
    iframe.setAttribute('id', env);
    div.append(iframe);
});

// setInterval(() => {
//     envs.map((env) => {
//         document.getElementById(env).contentWindow.location.reload();
//     });
// }, refreshSeconds * 1000)
