
    function acyncMovePage(url){
        // ajax option
        var ajaxOption = {
                url : url,
                async : true,
                type : "GET",
                dataType : "html",
                cache : false
        };
        
        $.ajax(ajaxOption).done(function(data){
            // Contents ���� ����
            $('#bodyContents').children().remove();
            // Contents ���� ��ü
            $('#bodyContents').html(data);
        });
    }