$(function () {
  $('.northkite').click(function () {
    window.open('htdocs/northkite.html');
  });

  // 以后变成模块化的可扩展的文章列表
  var diaries = [
    {sourceurl:'htdocs'},
    {dom:'.northkite', url: 'northkite.html'}
  ];
});
