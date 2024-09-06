<?= Form::ajax('onExport', [
    'id' => 'themeExportForm',
    'data-popup-load-indicator' => true,
    'data-request-success' => 'closeExportThemePopup()'
]) ?>

    <input type="hidden" name="theme" value="<?= $themeDir ?>" />

    <div class="modal-header">
        <button type="button" class="close" data-dismiss="popup">&times;</button>
        <h4 class="modal-title"><?= e(trans('cms::lang.theme.export_title')) ?></h4>
    </div>

    <?php if (!$this->fatalError): ?>

        <div class="modal-body">
            <?= $widget->render() ?>
        </div>
        <div class="modal-footer">
            <button
                type="submit"
                class="btn btn-success">
                <?= e(trans('cms::lang.theme.export_button')) ?>
            </button>

            <button
                type="button"
                class="btn btn-default"
                data-dismiss="popup">
                <?= e(trans('backend::lang.form.cancel')) ?>
            </button>
        </div>

    <?php else: ?>

        <div class="modal-body">
            <p class="flash-message static error"><?= e(trans($this->fatalError)) ?></p>
        </div>
        <div class="modal-footer">
            <button
                type="button"
                class="btn btn-default"
                data-dismiss="popup">
                <?= e(trans('backend::lang.form.close')) ?>
            </button>
        </div>

    <?php endif ?>

    <script>
        setTimeout(
            function(){ $('#themeExportForm input.form-control:first').focus() },
            310
        )

        function closeExportThemePopup() {
            $('#themeExportForm')
                .closest('.control-popup')
                .popup('hideLoading')
        }
    </script>

<?= Form::close() ?>
