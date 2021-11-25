from django.views.generic import TemplateView

class HomeViews(TemplateView):
    template_name = "home.html"

    def get_context_data(self):
        ctxt = super().get_context_data()
        ctxt["username"] = "つばさ"
        return ctxt

class IndexViews(TemplateView):
    template_name= "index.html"


class MapViews(TemplateView):
    template_name = "map.html"

    def get_context_data(self):
        ctxt = super().get_context_data()
        ctxt["username"] = "つばさ"
        return ctxt
