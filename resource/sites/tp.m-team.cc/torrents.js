(function ($, window) {
  // 添加封面模式
  PTSevrice.addButton({
    title: "以封面的方式进行查看",
    icon: "photo",
    label: "封面模式",
    click: (success, error) => {
      // 获取目标表格
      let tables = $("table.torrentname");
      let images = [];
      tables.each((index, item) => {
        let img = $("img[onmouseover]", item);
        let url = img.attr("src");
        let href = img.parent().attr("href");
        let title = $("td.embedded", item).text();
        images.push({
          url: url,
          key: href,
          title: title, //img.parent().attr("title"),
          link: img.parent().attr("href")
        });
      })

      // 创建预览
      new album({
        images: images,
        onClose: () => {
          PTSevrice.buttonBar.show();
        }
      });
      success()
      PTSevrice.buttonBar.hide();
    }
  })
})(jQuery, window)