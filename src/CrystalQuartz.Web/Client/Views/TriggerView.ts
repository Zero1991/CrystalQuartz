/// <reference path="../Definitions/john-smith-latest.d.ts"/> 
/// <reference path="../Scripts/ViewModels.ts"/> 
/// <reference path="_NullableDate.ts"/> 
/// <reference path="_ActivityStatus.ts"/> 

class TriggerView implements js.IView<TriggerViewModel> {
    template = "#TriggerView";

    init(dom: js.IDom, viewModel: TriggerViewModel) {
        dom('.name').observes(viewModel.name);

        dom('.status').observes(viewModel.status, ActivityStatusView);
        dom('.startDate').observes(viewModel.startDate, NullableDateView);
        dom('.endDate').observes(viewModel.endDate, NullableDateView);
        dom('.previousFireDate').observes(viewModel.previousFireDate, NullableDateView);
        dom('.nextFireDate').observes(viewModel.nextFireDate, NullableDateView);
    }
}   